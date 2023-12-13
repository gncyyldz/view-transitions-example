export const persons: any[] = [
    {
        id: 1,
        name: "Hilmi",
        photo: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
        id: 2,
        name: "Müslüm",
        photo: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
        id: 3,
        name: "Çoşgun",
        photo: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
        id: 4,
        name: "Şuayip",
        photo: "https://randomuser.me/api/portraits/men/19.jpg",
    },
].map(person => {
    return {
        ...person,
        viewTransitionName: `view-transition-name: person-${person.id}`
    }
});