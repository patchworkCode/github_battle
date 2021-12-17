import React from "react";
import PropTypes from "prop-types";
import { fetchPopularRepos } from "../utils/api";

import Bug from "remixicon-react/Bug2FillIcon";
import Branch from "remixicon-react/GitBranchFillIcon";
import Star from "remixicon-react/StarFillIcon";

//btn-clear nav-link
function LanguagesNav({ selected, onUpdateLanguage }) {
  const languages = ["All", "JavaScript", "Ruby", "Java", "Python", "Rust"];
  return (
    <ul className="flex items-center justify-center space-x-4 pd-5 hover:underline">
      {languages.map((language) => (
        <li key={language}>
          <button
            className="border-0 bg-transparent text-gray-800 text-opacity-75 px-8 pb-3 text-lg font-bold focus:underline hover:text-gray-900 hover:underline align-top"
            style={language === selected ? { color: "#6f5194" } : null}
            onClick={() => onUpdateLanguage(language)}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
}
//^nav tailwind css done

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
};
//gird space-around
function ReposGrid({ repos }) {
  return (
    <ul className="place-items-stretch grid grid-cols-3 gap-3 content-center pt-3">
      {repos.map((repo, index) => {
        const { name, owner, html_url, stargazers_count, forks, open_issues } =
          repo;
        const { login, avatar_url } = owner;
        return (
          <li key={html_url} className="rounded-b-lg hover:shadow mt-0.5 bg-gray-200">
            <h4
              className={
                index === 0
                  ? "bg-yellow-300 text-center text-xl"
                  : index === 1
                  ? "bg-gray-400 text-center text-xl"
                  : index === 2
                  ? "bg-bronze text-center text-xl"
                  : "text-center text-xl"
              }
            >
              #{index + 1}
            </h4>

            <img
              className="rounded-lg w-44 h-44 pt-2 m-0 m-auto block"
              src={avatar_url}
              alt={`Avatar for ${login}`}
            />
            <h2 className="text-center font-bold hover:underline hover:text-tertiary">
              <a className="link" href={html_url}>
                {login}
              </a>
            </h2>
            <ul className="m-1.5 text-lg">
              {" "}
              {/* cardlist ul */}
              {/*
                            <li>
                                <FaUser color='rgb(255, 191, 116)' size={22} />
                                <a href={`https://github.com/${login}`}>
                                    {login}
                                </a>
                            </li>
                            */}
              <li className="flex items-center m-0.5"></li>
              <li className="flex items-center m-0.5">
                <Star className="pr-2" color="black" size={32} />
                {stargazers_count.toLocaleString()} stars
              </li>
              <li className="flex items-center m-0.5">
                <Branch className="pr-2" color="black" size={32} />
                {forks.toLocaleString()} forks
              </li>
              <li className="flex items-center m-0.5">
                <Bug className="pr-2" color="black" size={32} />
                {open_issues.toLocaleString()} open issues
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

ReposGrid.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: "All",
      repos: {},
      error: null,
    };

    this.updateLanguage = this.updateLanguage.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }
  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }
  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage,
      error: null,
    });

    if (!this.state.repos[selectedLanguage]) {
      fetchPopularRepos(selectedLanguage)
        .then((data) => {
          this.setState(({ repos }) => ({
            repos: {
              ...repos,
              [selectedLanguage]: data, //syntactic sugar for repos[SL] = data, breaks otherwise
            },
          }));
        })
        .catch(() => {
          console.warn("Error fetching the repositories: ", error);

          this.setState({
            error: "There was an error fetching the repositories",
          });
        });
    }
  }
  isLoading() {
    const { selectedLanguage, repos, error } = this.state;

    return !repos[selectedLanguage] && error === null;
  }
  render() {
    const { selectedLanguage, repos, error } = this.state;
    return (
      <React.Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />

        {this.isLoading() && (
          <div className="w-10 h-10 border-b-2 border-gray-900 rounded-full animate-spin m-auto mt-64"></div>
        )}

        {error && <p>{error}</p>}

        {repos[selectedLanguage] && (
          <ReposGrid repos={repos[selectedLanguage]} />
        )}
      </React.Fragment>
    );
  }
}
