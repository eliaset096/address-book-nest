export class CreateContactDTO {
  readonly first_name: string;
  readonly last_name: string;
  readonly phone_number: string;
  readonly email: string;
  readonly address: string;
  readonly company: string;
  readonly job_position: string;
  readonly created_at: Date;
}
