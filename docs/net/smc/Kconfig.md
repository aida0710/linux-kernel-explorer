---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `net/smc/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config SMC
	tristate "SMC socket protocol family"
	depends on INET && INFINIBAND
	depends on m || ISM != m
	help
	  SMC-R provides a "sockets over RDMA" solution making use of
	  RDMA over Converged Ethernet (RoCE) technology to upgrade
	  AF_INET TCP connections transparently.
	  The Linux implementation of the SMC-R solution is designed as
	  a separate socket family SMC.

	  Select this option if you want to run SMC socket applications

config SMC_DIAG
	tristate "SMC: socket monitoring interface"
	depends on SMC
	help
	  Support for SMC socket monitoring interface used by tools such as
	  smcss.

	  if unsure, say Y.

config SMC_LO
	bool "SMC intra-OS shortcut with loopback-ism"
	depends on SMC
	default n
	help
	  SMC_LO enables the creation of an Emulated-ISM device named
	  loopback-ism in SMC and makes use of it for transferring data
	  when communication occurs within the same OS. This helps in
	  convenient testing of SMC-D since loopback-ism is independent
	  of architecture or hardware.

	  if unsure, say N.

```
