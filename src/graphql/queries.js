/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVideoFormats = /* GraphQL */ `
  query GetVideoFormats($id: ID!, $quality: String!) {
    getVideo_formats(id: $id, quality: $quality) {
      id
      quality
      url
    }
  }
`;
export const listVideoFormats = /* GraphQL */ `
  query ListVideoFormats(
    $filter: TableVideo_formatsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideo_formats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quality
        url
      }
      nextToken
    }
  }
`;
export const getVideo = /* GraphQL */ `
  query GetVideo($id: String!) {
    getVideo(id: $id) {
      id
      title
      description
      likes
      views
      stage
    }
  }
`;
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: TableVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        likes
        views
        stage
      }
      nextToken
    }
  }
`;
export const getLiveVideo = /* GraphQL */ `
  query GetLiveVideo($id: ID!) {
    getLive_video(id: $id) {
      id
      title
      description
      likes
      watching_now
      streaming_url
    }
  }
`;
export const listLiveVideos = /* GraphQL */ `
  query ListLiveVideos(
    $filter: TableLive_videoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLive_videos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        likes
        watching_now
        streaming_url
      }
      nextToken
    }
  }
`;
