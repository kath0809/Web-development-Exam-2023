namespace Formel1Api.Interfaces;

public interface IDriver
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public int Age { get; set; }
    public string? Nationality { get; set; }
    public string? Image { get; set; }
    public string? NationalityImg { get; set; }
}