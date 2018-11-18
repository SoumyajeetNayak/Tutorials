using AutoMapper;
using Vega_Used_Car_Sale_System.Controllers.Resources;
using Vega_Used_Car_Sale_System.Models;

namespace Vega_Used_Car_Sale_System.Mapping
{
    public class MappingProfile :Profile
    {
        public MappingProfile()
        {
            CreateMap<Make, MakeResource>();
            CreateMap<Model, ModelResource>();  
            CreateMap<Feature, FeatureResource>(); 
        }
    }
}