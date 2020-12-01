const express = require("express");
const router = express.Router();

const { reverse, fibonacci, combination } = require("./services/basicService");
const EmployeeService = require("./services/employeeService");

router.get("/employees", async (req, res) => {
  const e = new EmployeeService();

  res.send(await e.employees());
});

router.get("/employees/:id", async (req, res) => {
  const e = new EmployeeService();

  res.send(await e.employee(req.params.id));
});

router.post("/employees", async (req, res) => {
  const e = new EmployeeService(
    req.body.name,
    req.body.phone_number,
    req.body.jobtitle
  );

  const r = await e.create();

  if (!r) {
    res.sendStatus(500);
  } else {
    res.status(201).send(r);
  }
});

router.put("/employees/:id", async (req, res) => {
  const e = new EmployeeService(
    req.body.name,
    req.body.phone_number,
    req.body.jobtitle
  );

  const r = await e.update(req.params.id);

  if (!r) {
    res.sendStatus(500);
  } else {
    res.send(r);
  }
});

router.delete("/employees/:id", async (req, res) => {
  const e = new EmployeeService();

  const r = await e.delete(req.params.id);

  if (!r) {
    res.sendStatus(500);
  } else {
    res.sendStatus(204);
  }
});

router.post("/reverse", (req, res) => {
  const val = reverse(req.body.character || "");

  res.send({ result: val });
});

router.post("/fibonacci", (req, res) => {
  const val = fibonacci(parseInt(req.body.n));

  res.send({ result: val });
});

router.post("/combination", (req, res) => {
  const val = combination(parseInt(req.body.n), parseInt(req.body.r));

  res.send({ result: `${val}` });
});

module.exports = router;
