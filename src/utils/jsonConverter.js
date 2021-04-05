

class JsonHandler {
  constructor(json) {
    this.json = json;
  }

  getList = () => Object.values(this.json)
  getByName = (name) => this.json[name];

  getStateById = (id) =>
    Object.values(this.json)?.find((v) => v.id.toString() === id?.toString());

  getStateByCapital = (capital) =>
    Object.values(this.json).find(
      (v) => v.capital?.toLowerCase() === capital?.toLowerCase()
    );

  getLocalGovtCount = (name) => this.json[name]?.locals.length;

  getLocalGovtByName = (name) => this.json[name]?.locals;

  searchByState = (name) =>
    Object?.values(this.json)?.filter(
      (v) => v.state?.name?.toLowerCase()?.indexOf(name?.toLowerCase()) > -1
    );
}

export default JsonHandler;