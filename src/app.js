// do imports
import Amplify, { API, graphqlOperation } from "@aws-amplify/api";
import Storage from "@aws-amplify/storage";
import Auth from "@aws-amplify/auth";
import progressbar from "progressbar.js";
import sweetalert2 from "sweetalert2";
import plyr from "plyr";

import awsconfig from "./aws-exports";
import { listVideos } from "./graphql/queries";
import { updateVideo } from "./graphql/mutations";
import { getVideo } from "./graphql/queries";
import { onUpdateVideo } from "./graphql/subscriptions";
import PubSub from "@aws-amplify/pubsub";

// configure Amplify
Amplify.configure(awsconfig);
PubSub.configure(awsconfig);

Auth.configure({
  region: "eu-west-1",
  identityPoolId: "eu-west-1:8f7cde75-b1fe-46e5-bdf1-527385836e1f",
});

Storage.configure({
  AWSS3: {
    bucket: "robivers-video-source",
    region: "eu-west-1",
  },
});

// index functions
async function getVideos() {
  var videos = {
    stage: { eq: "COMPLETE" },
    views: { ge: 0 },
  };
  API.graphql(graphqlOperation(listVideos, { filter: videos, limit: 8 })).then(
    (evt) => {
      evt.data.listVideos.items.map((video, i) => {
        videolist.innerHTML += `
                <div class="col-md-3 resent-grid recommended-grid" style="margin-bottom: 10px;">
                    <div class="resent-grid-img recommended-grid-img">
                        <a href="single.html?id=${video.id}"><img src="https://d19g282uoymsox.cloudfront.net/${video.id}-thumbnail.0000001.jpg" alt="" /></a>
                    </div>
                    <div class="resent-grid-info recommended-grid-info video-info-grid">
                        <h5><a href="single.html?id=${video.id}" class="title">${video.title}</a></h5>
                        <ul>
                            <li><p class="author author-info">${video.likes} likes</p></li>
                            <li class="right-list"><p class="views views-info">${video.views} views</p></li>
                        </ul>
                    </div>
                </div>
            `;
      });
    }
  );
}

const videolist = document.getElementById("videolist");

if (videolist !== null) {
  getVideos();
  const urlParams = new URLSearchParams(window.location.search);
  const upload = urlParams.get("upload");
  if (upload == "success") {
    sweetalert2.fire(
      "Your video has been submitted!",
      "It will be available after transcoding",
      "success"
    );
  }
}

// upload functions
var videoId = "";

function showInputs() {
  var uploadfield = document.getElementById("uploadfield");
  uploadfield.setAttribute("style", "display:none;");
  var detailsform = document.getElementById("detailsform");
  detailsform.setAttribute("style", "");
}

function uploadFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var name = e.target.files[0].name;
  var uploadfield = document.getElementById("uploadfield");
  uploadfield.innerHTML = `<center><div style="margin: 20px;width: 200px;height: 200px;position: relative;" id="container"></div></center><div class="upload-info"><h5>${name}</h5></div>`;
  var circle = initProgressCircle();
  videoId = generateId();
  var uploadedPercentage = 0;
  Storage.put(videoId + ".mp4", file, {
    progressCallback(progress) {
      console.log(`Uploaded: ${(progress.loaded / progress.total) * 100}%`);
      if (
        Math.round((progress.loaded / progress.total) * 100) / 100 !=
        uploadedPercentage
      ) {
        uploadedPercentage =
          Math.round((progress.loaded / progress.total) * 100) / 100;
        circle.animate(uploadedPercentage);
      }
    },
    contentType: "video/mp4",
  })
    .then((result) => showInputs())
    .catch((err) => console.log(err));
}

function generateId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function initProgressCircle() {
  var bar = new progressbar.Circle(container, {
    color: "#aaa",
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: "easeInOut",
    text: {
      autoStyleContainer: false,
    },
    from: { color: "#aaa", width: 1 },
    to: { color: "#333", width: 4 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      circle.path.setAttribute("stroke-width", state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value);
      }
    },
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = "2rem";
  return bar;
}

async function createVideoItem(pid, ptitle, pdescription) {
  var video = {
    id: pid,
    title: ptitle,
    description: pdescription,
    likes: 0,
    views: 0,
  };
  return await API.graphql(graphqlOperation(updateVideo, { input: video }));
}

const form = document.getElementById("uploadform");

if (form !== null) {
  document
    .getElementById("videoupload")
    .addEventListener("change", uploadFile, false);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (videoId == "") {
      alert("Upload a video first!");
      return;
    }
    const title = document.getElementById("upload-title").value;
    const descirption = document.getElementById("upload-desciption").value;

    createVideoItem(videoId, title, descirption);
    window.location.href = "index.html?upload=success";
  });
}

//detail functions
function setVideoDetails(videoid, titleatt, descriptionatt, likeatt, viewsatt) {
  API.graphql(graphqlOperation(getVideo, { id: videoid })).then((evt) => {
    var video = evt.data.getVideo;
    titleatt.innerHTML = video.title;
    descriptionatt.innerHTML = video.description;
    likeatt.innerHTML = video.likes + " Likes";
    viewsatt.innerHTML = video.views + " Views";
  });
}

function subscribeToLikes(videoid, likeatt) {
  var onNewLike = `subscription updatevideo {
        onUpdateVideo(id: "${videoid}") {
          id,
          likes
        }
    }
    `;
  API.graphql(graphqlOperation(onNewLike)).subscribe({
    next: (data) => {
      document.getElementById("likes").innerHTML =
        data.value.data.onUpdateVideo.likes + " Likes";
    },
  });
}

function AddLike(videoid) {
  API.graphql(graphqlOperation(getVideo, { id: videoid })).then((evt) => {
    var video = evt.data.getVideo;
    var intlikes = video.likes;
    intlikes += 1;
    var video = {
      id: videoid,
      likes: intlikes,
    };
    API.graphql(graphqlOperation(updateVideo, { input: video }));
  });
}

const title = document.getElementById("video-title");
if (title !== null) {
  const urlParams = new URLSearchParams(window.location.search);
  const videoid = urlParams.get("id");
  const description = document.getElementById("video-description");
  const likes = document.getElementById("likes");
  const views = document.getElementById("views");
  document
    .getElementById("1080pvideo")
    .setAttribute(
      "src",
      `https://d19g282uoymsox.cloudfront.net/${videoid}1080p.mp4`
    );
  document
    .getElementById("720pvideo")
    .setAttribute(
      "src",
      `https://d19g282uoymsox.cloudfront.net/${videoid}720p.mp4`
    );
  document
    .getElementById("480pvideo")
    .setAttribute(
      "src",
      `https://d19g282uoymsox.cloudfront.net/${videoid}480p.mp4`
    );
  document
    .getElementById("360pvideo")
    .setAttribute(
      "src",
      `https://d19g282uoymsox.cloudfront.net/${videoid}360p.mp4`
    );
  setVideoDetails(videoid, title, description, likes, views);
  var player = new plyr("#player", {
    title: "Example Title",
  });
  subscribeToLikes(videoid);
  likes.addEventListener("click", () => {
    AddLike(videoid);
  });
}
