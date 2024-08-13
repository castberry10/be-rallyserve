export function pointDTO(point) {
    return {
        id: point.id,
        point: point.point,
        message: point.message,
        createdAt: point.createdAt,
        updatedAt: point.updatedAt,
    }
}
export default pointDTO;