import React from "react";
import useCardsData from "../Hooks/useCardsData";
import ServiceCard from "../components/ServiceDetailsCard";

const Services = () => {
  const { petservices, loading, error } = useCardsData();

  if (loading) return <p className="text-center py-8">Loading...</p>;
  if (error) return <p className="text-center py-8 text-red-500">Error loading data</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">All Services</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {petservices.map(petservice => <ServiceCard key={petservice.serviceId} petservice={petservice} />)}
      </div>
    </div>
  );
};

export default Services;
