namespace AngularStateManagement.Api.Models
{
    public class ToDo
    {
        public Guid ToDoId { get; set; }
        public string? Description { get; set; }
        public string? Status { get; set; }
    }
}
