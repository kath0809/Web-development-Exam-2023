namespace Formel1Api.Interfaces;

public interface INewTeam
{
    public string? TeamName { get; set; }
    public string? Manufacturer { get; set; }
    public string? Driver1 { get; set; }
    public string? Driver2 { get; set; }
    public string? TeamImg { get; set; }
}