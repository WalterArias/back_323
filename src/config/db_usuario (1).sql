

CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `apellidos` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `telefono` varchar(250) DEFAULT NULL,
  `ciudad` varchar(200) NOT NULL,
  `estado` varchar(100) NOT NULL,
  `password` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nombre`, `apellidos`, `email`, `telefono`, `ciudad`, `estado`, `password`) VALUES
(1, 'Pedro', 'Perez', 'pedro@gmail.com', '3224578', 'Cali', 'activo', '123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;
