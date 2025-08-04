import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ClinicaController } from "../clinica.controller";
import { ClinicaService } from "../clinica.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  activa: "exampleActiva",
  ciudad: "exampleCiudad",
  cp: "exampleCp",
  createdAt: new Date(),
  dir: "exampleDir",
  estado: "exampleEstado",
  id: "exampleId",
  nombreComercial: "exampleNombreComercial",
  razonSocial: "exampleRazonSocial",
  tel: "exampleTel",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  activa: "exampleActiva",
  ciudad: "exampleCiudad",
  cp: "exampleCp",
  createdAt: new Date(),
  dir: "exampleDir",
  estado: "exampleEstado",
  id: "exampleId",
  nombreComercial: "exampleNombreComercial",
  razonSocial: "exampleRazonSocial",
  tel: "exampleTel",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    activa: "exampleActiva",
    ciudad: "exampleCiudad",
    cp: "exampleCp",
    createdAt: new Date(),
    dir: "exampleDir",
    estado: "exampleEstado",
    id: "exampleId",
    nombreComercial: "exampleNombreComercial",
    razonSocial: "exampleRazonSocial",
    tel: "exampleTel",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  activa: "exampleActiva",
  ciudad: "exampleCiudad",
  cp: "exampleCp",
  createdAt: new Date(),
  dir: "exampleDir",
  estado: "exampleEstado",
  id: "exampleId",
  nombreComercial: "exampleNombreComercial",
  razonSocial: "exampleRazonSocial",
  tel: "exampleTel",
  updatedAt: new Date(),
};

const service = {
  createClinica() {
    return CREATE_RESULT;
  },
  clinicas: () => FIND_MANY_RESULT,
  clinica: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Clinica", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ClinicaService,
          useValue: service,
        },
      ],
      controllers: [ClinicaController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /clinicas", async () => {
    await request(app.getHttpServer())
      .post("/clinicas")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /clinicas", async () => {
    await request(app.getHttpServer())
      .get("/clinicas")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /clinicas/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/clinicas"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /clinicas/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/clinicas"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /clinicas existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/clinicas")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/clinicas")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
