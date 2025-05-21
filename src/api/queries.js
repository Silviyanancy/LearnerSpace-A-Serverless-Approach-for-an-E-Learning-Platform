/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserOrder = /* GraphQL */ `
  query GetUserOrder($id: ID!) {
    getUserOrder(id: $id) {
      id
      user
      date
      total
      courses {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserOrders = /* GraphQL */ `
  query ListUserOrders(
    $filter: ModelUserOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        date
        total
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const courseOrdersByCourse_idAndOrder_id = /* GraphQL */ `
  query CourseOrdersByCourse_idAndOrder_id(
    $course_id: ID!
    $order_id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCourseOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    courseOrdersByCourse_idAndOrder_id(
      course_id: $course_id
      order_id: $order_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        course_id
        order_id
        createdAt
        updatedAt
        customer
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const courseOrdersByOrder_idAndCourse_id = /* GraphQL */ `
  query CourseOrdersByOrder_idAndCourse_id(
    $order_id: ID!
    $course_id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCourseOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    courseOrdersByOrder_idAndCourse_id(
      order_id: $order_id
      course_id: $course_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        course_id
        order_id
        createdAt
        updatedAt
        customer
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userOrdersByUser = /* GraphQL */ `
  query UserOrdersByUser(
    $user: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userOrdersByUser(
      user: $user
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user
        date
        total
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      title
      description
      image
      instructor
      popular
      price
      orders {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        instructor
        popular
        price
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
