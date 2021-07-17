export class Endpoint{

    static id='';
    static base_url="http://192.168.0.25:80/api"
    static login:string=`${Endpoint.base_url}/login`;
    static admin_url=`${Endpoint.base_url}/admin/`;
    static secre_url=`${Endpoint.base_url}/secretaria/`;
    static add_categoria=`${Endpoint.base_url}/categoria/store`;
    static listar_categoria=`${Endpoint.base_url}/categoria/index`;
    static listar_ocorrencia= `${Endpoint.base_url}/ocorrencia/index`
    }