---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/microchip/vcap/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Microchip VCAP API configuration
#

if NET_VENDOR_MICROCHIP

config VCAP
	bool "VCAP (Versatile Content-Aware Processor) library"
	help
	  Provides the basic VCAP functionality for multiple Microchip switchcores

	  A VCAP is essentially a TCAM with rules consisting of

	    - Programmable key fields
	    - Programmable action fields
	    - A counter (which may be only one bit wide)

	  Besides this each VCAP has:

	    - A number of lookups
	    - A keyset configuration per port per lookup

	  The VCAP implementation provides switchcore independent handling of rules
	  and supports:

	    - Creating and deleting rules
	    - Updating and getting rules

	  The platform specific configuration as well as the platform specific model
	  of the VCAP instances are attached to the VCAP API and a client can then
	  access rules via the API in a platform independent way, with the
	  limitations that each VCAP has in terms of its supported keys and actions.

	  Different switchcores will have different VCAP instances with different
	  characteristics. Look in the datasheet for the VCAP specifications for the
	  specific switchcore.

config VCAP_KUNIT_TEST
	bool "KUnit test for VCAP library" if !KUNIT_ALL_TESTS
	depends on KUNIT
	depends on KUNIT=y && VCAP=y && y
	select DEBUG_FS
	default KUNIT_ALL_TESTS
	help
	  This builds unit tests for the VCAP library.

	  For more information on KUnit and unit tests in general, please refer
	  to the KUnit documentation in Documentation/dev-tools/kunit/.

	  If unsure, say N.

endif # NET_VENDOR_MICROCHIP

```
