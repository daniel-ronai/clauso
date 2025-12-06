import React from 'react';
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import { DashboardContent } from '@/components/DashboardContent';

const Dashboard = async() => {
    const user = await currentUser();

    if (!user) {
        redirect(`/sign-in`);
    }

    return (
        <DashboardContent />
    );
}

export default Dashboard;