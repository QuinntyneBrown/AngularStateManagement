using FluentValidation;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using AngularStateManagement.Api.Core;
using AngularStateManagement.Api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace AngularStateManagement.Api.Features
{
    public class UpdateToDo
    {
        public class Validator: AbstractValidator<Request>
        {
            public Validator()
            {
                RuleFor(request => request.ToDo).NotNull();
                RuleFor(request => request.ToDo).SetValidator(new ToDoValidator());
            }
        
        }

        public class Request: IRequest<Response>
        {
            public ToDoDto ToDo { get; set; }
        }

        public class Response: ResponseBase
        {
            public ToDoDto ToDo { get; set; }
        }

        public class Handler: IRequestHandler<Request, Response>
        {
            private readonly IAngularStateManagementDbContext _context;
        
            public Handler(IAngularStateManagementDbContext context)
                => _context = context;
        
            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var toDo = await _context.ToDos.SingleAsync(x => x.ToDoId == request.ToDo.ToDoId);

                toDo.Description = request.ToDo.Description;
                toDo.Status = request.ToDo.Status;
                await _context.SaveChangesAsync(cancellationToken);
                
                return new ()
                {
                    ToDo = toDo.ToDto()
                };
            }
            
        }
    }
}
