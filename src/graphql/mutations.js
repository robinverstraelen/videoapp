/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVideoFormats = /* GraphQL */ `
  mutation CreateVideoFormats($input: CreateVideo_formatsInput!) {
    createVideo_formats(input: $input) {
      id
      quality
      url
    }
  }
`;
export const updateVideoFormats = /* GraphQL */ `
  mutation UpdateVideoFormats($input: UpdateVideo_formatsInput!) {
    updateVideo_formats(input: $input) {
      id
      quality
      url
    }
  }
`;
export const deleteVideoFormats = /* GraphQL */ `
  mutation DeleteVideoFormats($input: DeleteVideo_formatsInput!) {
    deleteVideo_formats(input: $input) {
      id
      quality
      url
    }
  }
`;
export const createVideo = /* GraphQL */ `
  mutation CreateVideo($input: CreateVideoInput!) {
    createVideo(input: $input) {
      id
      title
      description
      likes
      views
      stage
    }
  }
`;
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo($input: UpdateVideoInput!) {
    updateVideo(input: $input) {
      id
      title
      description
      likes
      views
      stage
    }
  }
`;
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo($input: DeleteVideoInput!) {
    deleteVideo(input: $input) {
      id
      title
      description
      likes
      views
      stage
    }
  }
`;
export const createLiveVideo = /* GraphQL */ `
  mutation CreateLiveVideo($input: CreateLive_videoInput!) {
    createLive_video(input: $input) {
      id
      title
      description
      likes
      watching_now
      streaming_url
    }
  }
`;
export const updateLiveVideo = /* GraphQL */ `
  mutation UpdateLiveVideo($input: UpdateLive_videoInput!) {
    updateLive_video(input: $input) {
      id
      title
      description
      likes
      watching_now
      streaming_url
    }
  }
`;
export const deleteLiveVideo = /* GraphQL */ `
  mutation DeleteLiveVideo($input: DeleteLive_videoInput!) {
    deleteLive_video(input: $input) {
      id
      title
      description
      likes
      watching_now
      streaming_url
    }
  }
`;
