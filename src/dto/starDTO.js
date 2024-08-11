export function starDTO(star) {
    return {
        id: star.id,
        star: star.star,
        message: star.message,
        createdAt: star.createdAt,
        updatedAt: star.updatedAt,
    }
}
export default starDTO;