const token = 'rwH6jb4wPYfVhUTKwT+GgZ8p8h9ZOlTeG2kj0VAjPCI6m/EpwJhmML4OJtCACtkP/6k/z9bMT+LiNMJEBXc/Hw==';
const userId = '4l4qGuehMLlnbVh';
const header = {
  config: { 
    headers: {
      'Authorization': "Bearer " + token,
      'Content-Type': 'application/json'
    }
  },
  userId
}

export default header;