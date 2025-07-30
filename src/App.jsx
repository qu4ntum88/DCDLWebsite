<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DC: Dark Legion Champion Roster</title>
    <!-- Tailwind CSS CDN for easy styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Custom styles to override or extend Tailwind for specific elements */
        body {
            font-family: 'Inter', sans-serif;
            background-color: #1a1a2e; /* Dark background */
            color: #e0e0e0; /* Light text */
            margin: 0;
            padding: 20px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .character-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr); /* Five champions per row for desktop */
            gap: 8px; /* Small gap between cards */
            padding: 20px;
            justify-content: center;
        }

        .character-card {
            position: relative;
            background-color: #0f3460; /* Dark blue card background */
            border-radius: 10px;
            overflow: visible; /* Ensures tooltip is not clipped */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            transition: transform 0.2s ease-in-out;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            height: 220px; /* Adjusted height to accommodate taller portrait image */
            justify-content: space-between; /* Distribute content vertically */
        }

        .character-card:hover {
            transform: scale(1.08); /* Slightly larger grow effect */
        }

        .character-card img {
            width: 100%; /* Image fills the width of the card */
            height: 160px; /* Adjusted height for portrait image */
            object-fit: cover;
            border: 3px solid #e94560; /* Red border for accent */
            margin-bottom: 5px; /* Adjusted margin for better fit */
            border-radius: 5px; /* Slightly rounded corners for the image itself */
        }

        .character-card h3 {
            margin: 0;
            color: #bae8e8; /* Light blue for name */
            text-align: center;
            font-size: 1.1em;
            white-space: nowrap; /* Prevent name from wrapping */
            overflow: hidden; /* Hide overflow if name is too long */
            text-overflow: ellipsis; /* Add ellipsis for long names */
        }

        /* Tooltip styles */
        .tooltip {
            visibility: hidden;
            background-color: rgba(0, 0, 0, 0.9); /* Darker, slightly transparent background */
            color: #fff;
            text-align: left;
            border-radius: 8px; /* More rounded corners */
            padding: 12px 18px;
            position: absolute;
            z-index: 10; /* Ensure tooltip is on top */
            bottom: calc(100% + 15px); /* Position above the portrait with more space */
            left: 50%;
            transform: translateX(-50%);
            opacity: 0;
            transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
            min-width: 220px; /* Slightly wider tooltip */
            max-width: 300px; /* Max width to prevent overly wide tooltips */
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6); /* Stronger shadow */
        }

        .character-card:hover .tooltip {
            visibility: visible;
            opacity: 1;
        }

        .tooltip::after {
            content: "";
            position: absolute;
            top: 100%; /* Arrow pointing down from tooltip */
            left: 50%;
            margin-left: -8px; /* Adjust for larger arrow */
            border-width: 8px; /* Larger arrow */
            border-style: solid;
            border-color: rgba(0, 0, 0, 0.9) transparent transparent transparent;
        }

        .tooltip p {
            margin: 4px 0; /* Slightly less margin for compact info */
            font-size: 0.95em; /* Slightly larger font */
            line-height: 1.4;
        }

        .tooltip strong {
            color: #e94560; /* Accent color for labels */
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) { /* Adjust for larger tablets/smaller desktops */
            .character-grid {
                grid-template-columns: repeat(4, 1fr); /* Four champions per row */
                gap: 7px;
            }
            .character-card {
                height: 200px; /* Adjusted height for smaller screens */
            }
            .character-card img {
                height: 130px; /* Adjusted height for smaller screens */
            }
        }

        @media (max-width: 768px) {
            .character-grid {
                grid-template-columns: repeat(3, 1fr); /* Three champions per row */
                gap: 6px;
            }
            .character-card {
                height: 180px;
            }
            .character-card img {
                height: 110px; /* Adjusted height for smaller screens */
            }
            .character-card h3 {
                font-size: 1em;
            }
            .tooltip {
                min-width: 180px;
                padding: 10px 12px;
                font-size: 0.9em;
            }
        }

        @media (max-width: 480px) {
            body {
                padding: 10px;
            }
            .character-grid {
                grid-template-columns: repeat(2, 1fr); /* Two champions per row */
                gap: 4px;
            }
            .character-card {
                height: 160px;
                padding: 8px;
            }
            .character-card img {
                height: 90px; /* Adjusted height for smallest screens */
            }
            .character-card h3 {
                font-size: 0.9em;
            }
            .tooltip {
                min-width: 150px;
                padding: 8px 10px;
                font-size: 0.85em;
            }
        }
    </style>
</head>
<body class="bg-gray-900 text-gray-100 p-5">
    <header class="text-center mb-8">
        <h1 class="text-4xl font-bold text-red-500 mb-2">DC: Dark Legion Champion Roster</h1>
        <p class="text-lg text-gray-300">Explore the heroes and villains of the Dark Multiverse!</p>
    </header>

    <div class="controls flex flex-wrap justify-center items-center gap-4 mb-8 p-4 bg-gray-800 rounded-lg shadow-lg">
        <label for="sort-by" class="text-lg font-semibold text-blue-300">Sort by:</label>
        <select id="sort-by" class="p-2 rounded-md bg-gray-700 border border-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="name">Name</option>
            <option value="class">Class</option>
            <option value="factions">Factions</option>
            <option value="tier">Tier Ranking</option>
        </select>
        <button id="sort-direction" class="px-4 py-2 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500">Ascending</button>
    </div>

    <div id="character-grid" class="character-grid w-full max-w-6xl mx-auto">
        <!-- Character portraits will be injected here by JavaScript -->
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Placeholder Champion Data (YOU SHOULD REPLACE THIS WITH REAL AND MORE EXTENSIVE DATA)
            // Image URLs here are placeholders for portrait images.
            // Remember to update these with your actual image URLs, especially if hosted on GitHub!
            let champions = [
                {
                    id: 'connerkent',
                    name: 'Conner Kent',
                    class: 'Supporter',
                    factions: ['Superman Family', 'Metahuman'],
                    tier: 'A+',
                    gameModes: ['placeholder'],
                    image: 'https://raw.githubusercontent.com/qu4ntum88/DCDLWebsite/master/public/Champion%20Avatars/Conner_Kent.png' // Replace with your image URL
                },
                {
                    id: 'krypto',
                    name: 'Krypto',
                    class: 'Supporter',
                    factions: ['Superman Family', 'Metahuman'],
                    tier: 'A+',
                    gameModes: ['placeholder'],
                    image: 'https://raw.githubusercontent.com/qu4ntum88/DCDLWebsite/master/public/Champion%20Avatars/Krypto.png' // Replace with your image URL
                },
                {
                    id: 'superman',
                    name: 'Superman',
                    class: 'Warrior',
                    factions: ['Superman Family', 'Metahuman'],
                    tier: 'S',
                    gameModes: ['placeholder'],
                    image: 'https://raw.githubusercontent.com/qu4ntum88/DCDLWebsite/master/public/Champion%20Avatars/superman.png' // Replace with your image URL
                },
                {
                    id: 'supergirl',
                    name: 'Supergirl',
                    class: 'Warrior',
                    factions: ['Superman Family', 'Metahuman'],
                    tier: 'S',
                    gameModes: ['placeholder'],
                    image: 'https://raw.githubusercontent.com/qu4ntum88/DCDLWebsite/master/public/Champion%20Avatars/Supergirl.png' // Replace with your image URL
                },
                {
                    id: 'deathstroke',
                    name: 'Deathstroke',
                    class: 'Assassin',
                    factions: ['Villains', 'Mercenaries'],
                    tier: 'S',
                    gameModes: ['Bounty Hunts', 'PvP Arena'],
                    image: 'https://raw.githubusercontent.com/qu4ntum88/DCDLWebsite/master/public/Champion%20Avatars/batman.png' // Replace with your image URL
            }
                // Add more champions here following the same structure
            ];

            const characterGrid = document.getElementById('character-grid');
            const sortBySelect = document.getElementById('sort-by');
            const sortDirectionButton = document.getElementById('sort-direction');

            let currentSortKey = 'name';
            let sortAscending = true; // true for ascending, false for descending

            /**
             * Renders the character cards into the grid.
             * @param {Array<Object>} chars - The array of champion objects to render.
             */
            function renderCharacters(chars) {
                characterGrid.innerHTML = ''; // Clear existing content to re-render
                chars.forEach(champion => {
                    const card = document.createElement('div');
                    card.classList.add('character-card', 'rounded-xl', 'p-3', 'flex', 'flex-col', 'items-center', 'justify-between', 'transform', 'hover:scale-105', 'transition-transform', 'duration-200', 'ease-in-out', 'shadow-lg', 'bg-gradient-to-br', 'from-blue-900', 'to-purple-900'); // Added Tailwind classes for styling

                    // Create the tooltip content
                    const tooltipContent = `
                        <p><strong>Class:</strong> ${champion.class}</p>
                        <p><strong>Factions:</strong> ${champion.factions.join(', ')}</p>
                        <p><strong>Tier:</strong> ${champion.tier}</p>
                        <p><strong>Best Modes:</strong> ${champion.gameModes.join(', ')}</p>
                    `;

                    card.innerHTML = `
                        <img src="${champion.image}" alt="${champion.name} Portrait" class="w-full h-[160px] object-cover border-4 border-red-500 mb-1">
                        <h3 class="text-lg font-semibold text-blue-200 text-center">${champion.name}</h3>
                        <div class="tooltip absolute bg-gray-800 text-white text-sm rounded-lg p-3 shadow-xl z-10 opacity-0 invisible transition-all duration-300 ease-in-out">
                            ${tooltipContent}
                            <div class="tooltip-arrow absolute w-0 h-0 border-l-8 border-r-8 border-t-8 border-solid border-transparent border-t-gray-800 bottom-[-8px] left-1/2 -translate-x-1/2"></div>
                        </div>
                    `;
                    characterGrid.appendChild(card);
                });
            }

            /**
             * Sorts the champions array based on the current sort key and direction.
             */
            function sortChampions() {
                let sortedChampions = [...champions]; // Create a shallow copy to avoid mutating the original array

                sortedChampions.sort((a, b) => {
                    let valA, valB;

                    if (currentSortKey === 'factions') {
                        // For factions, sort by the first faction alphabetically.
                        // If multiple factions, it will sort based on the lexicographical order of the joined string.
                        // To ensure consistent sorting, we sort the internal factions array first.
                        valA = a.factions.length > 0 ? a.factions.slice().sort().join(', ').toLowerCase() : '';
                        valB = b.factions.length > 0 ? b.factions.slice().sort().join(', ').toLowerCase() : '';
                    } else if (currentSortKey === 'tier') {
                        // Custom sort order for tier rankings (S+, S, A+, A, B+, B, C, D...)
                        const tierOrder = {
                            'S+': 0, 'S': 1, 'A+': 2, 'A': 3, 'B+': 4, 'B': 5, 'C': 6, 'D': 7,
                            // Add more tiers if needed
                        };
                        valA = tierOrder[a.tier] !== undefined ? tierOrder[a.tier] : Infinity; // Assign high value for unknown tiers
                        valB = tierOrder[b.tier] !== undefined ? tierOrder[b.tier] : Infinity;
                    } else {
                        // Default alphabetical sort for name and class
                        valA = String(a[currentSortKey]).toLowerCase();
                        valB = String(b[currentSortKey]).toLowerCase();
                    }

                    if (valA < valB) {
                        return sortAscending ? -1 : 1;
                    }
                    if (valA > valB) {
                        return sortAscending ? 1 : -1;
                    }
                    return 0; // Values are equal
                });

                renderCharacters(sortedChampions);
            }

            // Event listener for sorting key change
            sortBySelect.addEventListener('change', (event) => {
                currentSortKey = event.target.value;
                sortChampions();
            });

            // Event listener for sort direction toggle
            sortDirectionButton.addEventListener('click', () => {
                sortAscending = !sortAscending;
                sortDirectionButton.textContent = sortAscending ? 'Ascending' : 'Descending';
                sortChampions();
            });

            // Initial render of champions when the page loads
            sortChampions();
        });
    </script>
</body>
</html>


