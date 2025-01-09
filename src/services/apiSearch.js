import { supabase } from "../supabaseClient";

// Search policies by policy_number and return related data
async function searchPoliciesByNumber(searchTerm) {
  const { data, error } = await supabase
    .from("policies")
    .select(
      `
      policy_number,
      clients (client_name),
      carriers (carrier_name),
      products (product_name)
    `,
    )
    .ilike("policy_number", `%${searchTerm}%`);

  if (error) {
    console.error("Error fetching policies:", error);
    return null;
  }

  return data;
}

// Global search function to search across multiple tables
async function globalSearch(searchTerm) {
  // Search Policies
  const { data: policies, error: policyError } = await supabase
    .from("policies")
    .select(
      `
      policy_number,
      clients (client_name),
      carriers (carrier_name),
      products (product_name)
    `,
    )
    .ilike("policy_number", `%${searchTerm}%`);

  // Search Clients
  const { data: clients, error: clientError } = await supabase
    .from("clients")
    .select("client_name, phone_number")
    .ilike("client_name", `%${searchTerm}%`);

  // Handle any potential errors
  if (policyError || clientError) {
    console.error("Error in global search:", {
      policyError,
      clientError,
    });
    return null;
  }

  // Combine results
  const combinedResults = {
    policies: policies || [],
    clients: clients || [],
  };

  return combinedResults;
}

export { searchPoliciesByNumber, globalSearch };
