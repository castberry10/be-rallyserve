export function starDTO(star) {
    return {
        id: star.id,
        star: star.star,
        createdAt: star.createdAt,
        updatedAt: star.updatedAt,
    }
}
export default starDTO;