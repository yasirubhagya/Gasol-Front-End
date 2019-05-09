import gql from "graphql-tag";

const Add_Doctor = gql`
mutation addDoctor(
    $name:String!,
    $slmcNo: String!,
    $isConsultant: Boolean!,
    $fieldOfConsultingId:ID,
    $createdById:ID!
    ) {
    addDoctor(
        name:$name,
       slmcNo: $slmcNo,
       isConsultant: $isConsultant,
       fieldOfConsultingId:$fieldOfConsultingId,
       createdById:$createdById
    ) {
    _id
    name
    slmcNo
    isConsultant
    fieldOfConsulting{
        _id
    }
    createdBy{
        _id
    }
  }
}
`;

const GET_FieldOfConsultant = gql`
{
  consultantType {
    _id
    name
  }
}
`;

const GET_Doctors = gql`
  {
    doctors {
      _id
      name
      slmcNo
      isConsultant
      fieldOfConsulting{
          _id
          name
      }
      createdBy{
          _id
          name
      }
    }
  }
`;

const DELETE_Doctor = gql`
   mutation DELETE_Doctor($_id:ID!){
    deleteDoctor(_id:$_id){
        _id
        name
    }
   }
`;

const UPDATE_Doctor = gql`
mutation UPDATE_Doctor(
    $_id:ID!,
    $name:String!,
    $slmcNo: String!,
    $isConsultant: Boolean!,
    $fieldOfConsultingId:ID
    ){
     updateDoctor(
         _id:$_id,
         name:$name,
         slmcNo:$slmcNo,
         isConsultant:$isConsultant,
         fieldOfConsultingId:$fieldOfConsultingId
     ){
          _id
         name
     }
    }
`;

const ADD_FieldOfConsultant = gql`
mutation ADD_FieldOfConsultant(
    $name:String!,
    $createdById:ID!
    ) {
      addConsultantType(
        name:$name,
       createdById:$createdById
    ) {
    _id
    name
    createdBy{
        _id
        name
    }
  }
}
`;

const UPDATE_FieldOfConsultant = gql`
mutation UPDATE_FieldOfConsultant(
      $_id:ID!, 
      $name:String!
    ) {
      updateConsultantType(
        _id:$_id,  
        name:$name
    ) {
    _id
    name
    createdBy{
        _id
        name
    }
  }
}
`;

const DELETE_FieldOfConsultant = gql`
   mutation DELETE_FieldOfConsultant($_id:ID!){
    deleteConsultantType(_id:$_id){
        _id
        name
    }
   }
`;

const ADD_ChannelCenter = gql`
      mutation ADD_ChannelCenter(
        $userType: String!,
        $regNo: String!,
        $name: String!,
        $owner: String!,
        $address: String!,
        $phoneNo: String!
        ){
          addChannelCenter(
            userType:$userType,
            regNo:$regNo,
            name:$name,
            owner:$owner,
            address:$address,
            phoneNo:$phoneNo
          ){
             _id
             user{
               _id
             }
          }
      }
`;

export { GET_FieldOfConsultant, Add_Doctor, GET_Doctors, DELETE_Doctor, UPDATE_Doctor, ADD_FieldOfConsultant,DELETE_FieldOfConsultant,UPDATE_FieldOfConsultant,ADD_ChannelCenter };