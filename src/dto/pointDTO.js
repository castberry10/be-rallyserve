export function pointDTO(point) {
    return {
        id: point.id,
        points: point.points,
        createdAt: point.createdAt,
        updatedAt: point.updatedAt,
    }
}
export default pointDTO;