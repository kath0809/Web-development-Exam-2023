import CreateTeam from "../components/manageTeams/CreateTeam";
import DeleteTeam from "../components/manageTeams/DeleteTeam";
import SearchTeam from "../components/manageTeams/SearchTeam";
import UpdateTeam from "../components/manageTeams/UpdateTeam";
import { TeamProvider } from "../contexts/TeamContext";

const ManageTeamPage = () => {
    return (
        <TeamProvider>
        <section className="row g-3">
        <CreateTeam />
        <article>
        <SearchTeam />
        </article>
        <article>
        <DeleteTeam />
        </article>
        <article>
        <UpdateTeam />
        </article>
        </section>
        </TeamProvider>
    )
};

export default ManageTeamPage;
