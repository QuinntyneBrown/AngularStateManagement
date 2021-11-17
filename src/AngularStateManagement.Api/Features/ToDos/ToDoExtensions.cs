using AngularStateManagement.Api.Models;

namespace AngularStateManagement.Api.Features
{
    public static class ToDoExtensions
    {
        public static ToDoDto ToDto(this ToDo toDo)
        {
            return new ()
            {
                ToDoId = toDo.ToDoId,
                Description = toDo.Description,
                Status = toDo.Status
            };
        }        
    }
}
