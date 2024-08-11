export function pointDTO(point) {
    return {
        id: point.id,
        points: point.points,
        message: point.message,
        createdAt: point.createdAt,
        updatedAt: point.updatedAt,
    }
}
export default pointDTO;