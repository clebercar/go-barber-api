import ICreateNotification from '../dtos/ICreateNotificationDTO';
import Notification from '../infra/typeorm/schemas/Notification';

export default interface INotificationRepository {
  create(data: ICreateNotification): Promise<Notification>;
}
