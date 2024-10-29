import { useUser } from "@clerk/clerk-react";

const UserPage = () => {
    const { user, isLoaded, isSignedIn} = useUser();
    if (!isLoaded) {
        // Handle loading state however you like
        return null
      }
    
      if (isSignedIn) {
        return <div>Hello {user.fullName}!</div>
      }
    
      return <div>Not signed in</div>
};

export default UserPage;

