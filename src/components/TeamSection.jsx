import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { User } from 'lucide-react';

const fetchTeamData = async () => {
  try {
    const response = await fetch('https://adwebcomicagency.vercel.app/#team', {
      mode: 'cors', // This might help with CORS, but the server needs to allow it
    });
    if (!response.ok) {
      throw new Error('Failed to fetch team data');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching team data:', error);
    return []; // Return an empty array if there's an error
  }
};

const TeamSection = () => {
  const { data: teamData, isLoading, error } = useQuery({
    queryKey: ['team'],
    queryFn: fetchTeamData,
  });

  if (isLoading) return <div className="text-center">Loading team data...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error.message}</div>;

  // Ensure teamData is an array before mapping
  const teamMembers = Array.isArray(teamData) ? teamData : [];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Our Team</h2>
        {teamMembers.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">No team members to display.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mb-4 mx-auto object-cover" />
                ) : (
                  <User className="w-32 h-32 text-gray-400 mb-4" />
                )}
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 dark:text-gray-300 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
