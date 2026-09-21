export enum ECheckInStatus {
  CREATED = 'CREATED', // ticket gerado, ainda não validado
  WAITING = 'WAITING', // ticket validado e entrou na fila
  CALLED = 'CALLED', // paciente chamado
  IN_SERVICE = 'IN_SERVICE', // atendimento começou
  COMPLETED = 'COMPLETED', // atendimento terminou
  EXPIRED = 'EXPIRED',
  CANCELLED = 'CANCELLED',
}
