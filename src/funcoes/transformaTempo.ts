export default function transformaTempo(tempo:any){

    const [horas="0",minutos="0",segundos="0"]:any = tempo.split(":")

    const horasParaSegundos = Number(horas) * 3600
    const minutosParaSegundos = Number(minutos) *60

    return (horasParaSegundos+minutosParaSegundos + Number(segundos))
}