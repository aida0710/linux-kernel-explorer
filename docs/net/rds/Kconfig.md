---
sidebar_position: 18
---
# Kconfig

### ファイル情報

- パス: `net/rds/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

config RDS
	tristate "The Reliable Datagram Sockets Protocol"
	depends on INET
	help
	  The RDS (Reliable Datagram Sockets) protocol provides reliable,
	  sequenced delivery of datagrams over Infiniband or TCP.

config RDS_RDMA
	tristate "RDS over Infiniband"
	depends on RDS && INFINIBAND && INFINIBAND_ADDR_TRANS
	help
	  Allow RDS to use Infiniband as a transport.
	  This transport supports RDMA operations.

config RDS_TCP
	tristate "RDS over TCP"
	depends on RDS
	depends on IPV6 || !IPV6
	help
	  Allow RDS to use TCP as a transport.
	  This transport does not support RDMA operations.

config RDS_DEBUG
	bool "RDS debugging messages"
	depends on RDS
	default n

config GCOV_PROFILE_RDS
	bool "Enable GCOV profiling on RDS"
	depends on GCOV_KERNEL
	help
	  Enable GCOV profiling on RDS for checking which functions/lines
	  are executed.

	  If unsure, say N.

```
