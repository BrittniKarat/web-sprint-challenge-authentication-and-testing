exports.seed = function(knex, Promise) {
    return knex('users')
      .truncate()
      .then(function() {
        return knex('users').insert([
          { username: "boy" , password: "$2a$08$4ktw/1C9FHfmNsqQoZHUouXIjLb1QTjek8p/fQZsJX3F0AJWMPpqC" },
          { username: "girl" , password: "$2a$08$VS/qMb./hJ5TLsa30POUxO/.jw7mDuY7IRGYgHchLVWLp3.PNz7dq" },
          { username: "woman" , password: "$2a$08$At7KvVi/xwNUxvICsWIfZeZQ6TzLCeLMwDLDQiWNooBPSAM0wRNbW" },
          { username: "men" , password: "$2a$08$eDOCXi8ugC3YnL/SOgaT9e/wf9KnBsTv5COMOfKxy5jSrjL.fn5U2" },
        ])
      })
  }
