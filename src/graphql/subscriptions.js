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
    $title: String
    $description: String
    $likes: Int
    $views: Int
  ) {
    onUpdateVideo(
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
