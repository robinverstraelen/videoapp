/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVideoFormats = /* GraphQL */ `
  subscription OnCreateVideoFormats($id: ID, $quality: String, $url: String) {
    onCreateVideo_formats(id: $id, quality: $quality, url: $url) {
      id
      quality
      url
    }
  }
`;
export const onUpdateVideoFormats = /* GraphQL */ `
  subscription OnUpdateVideoFormats($id: ID, $quality: String, $url: String) {
    onUpdateVideo_formats(id: $id, quality: $quality, url: $url) {
      id
      quality
      url
    }
  }
`;
export const onDeleteVideoFormats = /* GraphQL */ `
  subscription OnDeleteVideoFormats($id: ID, $quality: String, $url: String) {
    onDeleteVideo_formats(id: $id, quality: $quality, url: $url) {
      id
      quality
      url
    }
  }
`;
export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo(
    $id: String
    $title: String
    $description: String
    $likes: Int
    $views: Int
  ) {
    onCreateVideo(
      id: $id
      title: $title
      description: $description
      likes: $likes
      views: $views
    ) {
      id
      title
      description
      likes
      views
      stage
    }
  }
`;
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo(
    $id: String
    $likes: Int
    $views: Int
    $stage: String
  ) {
    onUpdateVideo(id: $id, likes: $likes, views: $views, stage: $stage) {
      id
      title
      description
      likes
      views
      stage
    }
  }
`;
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo(
    $id: String
    $title: String
    $description: String
    $likes: Int
    $views: Int
  ) {
    onDeleteVideo(
      id: $id
      title: $title
      description: $description
      likes: $likes
      views: $views
    ) {
      id
      title
      description
      likes
      views
      stage
    }
  }
`;
export const onCreateLiveVideo = /* GraphQL */ `
  subscription OnCreateLiveVideo(
    $id: ID
    $title: String
    $description: String
    $likes: Int
    $watching_now: Int
  ) {
    onCreateLive_video(
      id: $id
      title: $title
      description: $description
      likes: $likes
      watching_now: $watching_now
    ) {
      id
      title
      description
      likes
      watching_now
      streaming_url
    }
  }
`;
export const onUpdateLiveVideo = /* GraphQL */ `
  subscription OnUpdateLiveVideo(
    $id: ID
    $title: String
    $description: String
    $likes: Int
    $watching_now: Int
  ) {
    onUpdateLive_video(
      id: $id
      title: $title
      description: $description
      likes: $likes
      watching_now: $watching_now
    ) {
      id
      title
      description
      likes
      watching_now
      streaming_url
    }
  }
`;
export const onDeleteLiveVideo = /* GraphQL */ `
  subscription OnDeleteLiveVideo(
    $id: ID
    $title: String
    $description: String
    $likes: Int
    $watching_now: Int
  ) {
    onDeleteLive_video(
      id: $id
      title: $title
      description: $description
      likes: $likes
      watching_now: $watching_now
    ) {
      id
      title
      description
      likes
      watching_now
      streaming_url
    }
  }
`;
