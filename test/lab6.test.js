const supertest = require("supertest");
const api = supertest("https://gorest.co.in/public/v2");

const BEARER_TOKEN =
  "Bearer dd34aec01136b652cce535dc5fc590169cfeb4279a4393fb055fe29cea9c4343";

describe("API Tests", () => {
  it("should create a new user with a POST request", (done) => {
    api
      .post("/users")
      .set("Authorization", BEARER_TOKEN)
      .send({
        name: 'Art Yer',
        email: 'artyer2@example.com',
        gender: 'male',
        status: 'active',
      })
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        const user = res.body.data;
        if (user && user.hasOwnProperty("name")) {
          console.log("New user name:", user.name);
        } else {
          console.log(
            "User name is undefined or does not exist in the response."
          );
        }
        done();
      });
  });

  it("should get user details with a GET request", (done) => {
    api
      .get("/users/5714923")
      .set("Authorization", BEARER_TOKEN)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const user = res.body.data;
        console.log("User details:", user);
        done();
      });
  });

  it("should update user details with a PUT request", (done) => {
    api
      .put("/users/5714921")
      .set("Authorization", BEARER_TOKEN)
      .send({
        name: "Updated Name",
        gender: "female",
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const user = res.body.data;
        if (user && user.hasOwnProperty("name")) {
          console.log("Updated user name:", user.name);
        } else {
          console.log(
            "User name is undefined or does not exist in the response."
          );
        }
        done();
      });
  });

  it("should delete a user with a DELETE request", (done) => {
    api
      .delete("/users/5714923")
      .set("Authorization", BEARER_TOKEN)
      .expect(204)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
