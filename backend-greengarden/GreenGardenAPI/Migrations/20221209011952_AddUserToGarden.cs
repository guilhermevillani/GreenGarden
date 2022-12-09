using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GreenGardenAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddUserToGarden : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "GardenId",
                table: "Users",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_GardenId",
                table: "Users",
                column: "GardenId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Gardens_GardenId",
                table: "Users",
                column: "GardenId",
                principalTable: "Gardens",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Gardens_GardenId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_GardenId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "GardenId",
                table: "Users");
        }
    }
}
