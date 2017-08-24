
/*
Build these tables ('Supplier' and 'Company') on your MySQL server,
or change the Types according to your own database structure..
*/

export const typeDefs = `
  type Supplier {
    ID: Int!
    NAME: String
    PROFESSION: String
    PHONE:String
    EMAIL:String
    COMPANY: Company
    BUSINESS_NUMBER: String
  }
  
  type Company {
    ID: Int!
    NAME: String
    COUNTRY: String
    CEO:String
 }
    
  # the schema allows the following query:
  type Query {
    getSupplier(company: String): [Supplier]
  }
`;

