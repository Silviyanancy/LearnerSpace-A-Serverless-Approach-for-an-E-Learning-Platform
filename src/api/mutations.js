/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
export const createCourseOrder = /* GraphQL */ `
  mutation CreateCourseOrder(
    $input: CreateCourseOrderInput!
    $condition: ModelCourseOrderConditionInput
  ) {
    createCourseOrder(input: $input, condition: $condition) {
      id
      course_id
      order_id
      course {
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
      order {
        id
        user
        date
        total
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      customer
      __typename
    }
  }
`;
export const updateCourseOrder = /* GraphQL */ `
  mutation UpdateCourseOrder(
    $input: UpdateCourseOrderInput!
    $condition: ModelCourseOrderConditionInput
  ) {
    updateCourseOrder(input: $input, condition: $condition) {
      id
      course_id
      order_id
      course {
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
      order {
        id
        user
        date
        total
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      customer
      __typename
    }
  }
`;
export const deleteCourseOrder = /* GraphQL */ `
  mutation DeleteCourseOrder(
    $input: DeleteCourseOrderInput!
    $condition: ModelCourseOrderConditionInput
  ) {
    deleteCourseOrder(input: $input, condition: $condition) {
      id
      course_id
      order_id
      course {
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
      order {
        id
        user
        date
        total
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      customer
      __typename
    }
  }
`;
export const createUserOrder = /* GraphQL */ `
  mutation CreateUserOrder(
    $input: CreateUserOrderInput!
    $condition: ModelUserOrderConditionInput
  ) {
    createUserOrder(input: $input, condition: $condition) {
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
export const updateUserOrder = /* GraphQL */ `
  mutation UpdateUserOrder(
    $input: UpdateUserOrderInput!
    $condition: ModelUserOrderConditionInput
  ) {
    updateUserOrder(input: $input, condition: $condition) {
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
export const deleteUserOrder = /* GraphQL */ `
  mutation DeleteUserOrder(
    $input: DeleteUserOrderInput!
    $condition: ModelUserOrderConditionInput
  ) {
    deleteUserOrder(input: $input, condition: $condition) {
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
