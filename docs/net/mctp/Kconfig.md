---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `net/mctp/Kconfig`

### コンテンツ

```txt

menuconfig MCTP
	depends on NET
	bool "MCTP core protocol support"
	help
	  Management Component Transport Protocol (MCTP) is an in-system
	  protocol for communicating between management controllers and
	  their managed devices (peripherals, host processors, etc.). The
	  protocol is defined by DMTF specification DSP0236.

	  This option enables core MCTP support. For communicating with other
	  devices, you'll want to enable a driver for a specific hardware
	  channel.

config MCTP_TEST
        bool "MCTP core tests" if !KUNIT_ALL_TESTS
        select MCTP_FLOWS
        depends on MCTP=y && KUNIT=y
        default KUNIT_ALL_TESTS

config MCTP_FLOWS
	bool
	depends on MCTP
	select SKB_EXTENSIONS

```
