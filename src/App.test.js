import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/react";
import App from "./App";
import {fetchEpisodes as mockFetchShow} from './api/fetchEpisodes'

// const mockFetchShow = () => {
//     return axios
//       .get(
//         "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
//       )
//       .then(res => {
//         console.log(res.data);
//         return res.data._embedded.episodes;
//       })
//       .catch(err => {
//         console.error(err)
//         return err;
//       });
//     }

// mock the async function!
jest.mock('./api/fetchEpisodes');

const episodeData = {
    data: [
        {
            "id": 578663,
            "url": "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
            "name": "Chapter Two: The Weirdo on Maple Street",
            "season": 1,
            "number": 2,
            "airdate": "2016-07-15",
            "airtime": "",
            "airstamp": "2016-07-15T12:00:00+00:00",
            "runtime": 60,
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg"
            },
            "summary": "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
            "_links": {
              "self": {
                "href": "http://api.tvmaze.com/episodes/578663"
              }
            }
          },
          {
            "id": 578664,
            "url": "http://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-holly-jolly",
            "name": "Chapter Three: Holly, Jolly",
            "season": 1,
            "number": 3,
            "airdate": "2016-07-15",
            "airtime": "",
            "airstamp": "2016-07-15T12:00:00+00:00",
            "runtime": 60,
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/67/168920.jpg"
            },
            "summary": "<p>While Nancy looks for a missing Barbara and realizes that Jonathan may have been the last person to see her, Mike and his friends go out with Jane to find the missing Will. Meanwhile, Jim tracks Will to the lab.</p>",
            "_links": {
              "self": {
                "href": "http://api.tvmaze.com/episodes/578664"
              }
            }
          },
          {
            "id": 578665,
            "url": "http://www.tvmaze.com/episodes/578665/stranger-things-1x04-chapter-four-the-body",
            "name": "Chapter Four: The Body",
            "season": 1,
            "number": 4,
            "airdate": "2016-07-15",
            "airtime": "",
            "airstamp": "2016-07-15T12:00:00+00:00",
            "runtime": 60,
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/67/168921.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/67/168921.jpg"
            },
            "summary": "<p>Jim realizes that the government is covering something up about Will's death and begins a personal investigation. Meanwhile, Nancy discovers that Jonathan has information about Barbara's disappearance, while Mike and his friends smuggle Jane into the school so she can use the ham radio to contact Will.</p>",
            "_links": {
              "self": {
                "href": "http://api.tvmaze.com/episodes/578665"
              }
            }
          },
    ]
}

// javascript feature called async/await
test("clicking on the button fetches data and renders it to the DOM", async () => {
    // mock the resolved data
    mockFetchShow.mockResolvedValueOnce(episodeData);
    // render the component
    const { getByText, queryAllByTestId } = render(<App />);
  
    // query for the button
    // click on the button
    // userEvent.click(getByText(/episode/i));
    // fireEvent.click(getByText(/episode/i));
  
    // await for the data to be fetched
    // await waitFor(() =>
    // // query for the missions array / assert that it is rendered
    //   expect(queryAllByTestId(/episode-list/i)).toHaveLength(3)
    // );
  
    // // can also do other assertions out here. Await means this code won't run until the promise resolves
    // expect(mockFetchShow).toHaveBeenCalledTimes(1);
  });

