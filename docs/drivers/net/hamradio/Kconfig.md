---
sidebar_position: 8
---
# Kconfig

### ファイル情報

- パス: `drivers/net/hamradio/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config MKISS
	tristate "Serial port KISS driver"
	depends on AX25 && TTY
	select CRC16
	help
	  KISS is a protocol used for the exchange of data between a computer
	  and a Terminal Node Controller (a small embedded system commonly
	  used for networking over AX.25 amateur radio connections; it
	  connects the computer's serial port with the radio's microphone
	  input and speaker output).

	  Although KISS is less advanced than the 6pack protocol, it has
	  the advantage that it is already supported by most modern TNCs
	  without the need for a firmware upgrade.

	  To compile this driver as a module, choose M here: the module
	  will be called mkiss.

config 6PACK
	tristate "Serial port 6PACK driver"
	depends on AX25 && TTY
	help
	  6pack is a transmission protocol for the data exchange between your
	  PC and your TNC (the Terminal Node Controller acts as a kind of
	  modem connecting your computer's serial port to your radio's
	  microphone input and speaker output). This protocol can be used as
	  an alternative to KISS for networking over AX.25 amateur radio
	  connections, but it has some extended functionality.

	  Note that this driver is still experimental and might cause
	  problems. For details about the features and the usage of the
	  driver, read <file:Documentation/networking/6pack.rst>.

	  To compile this driver as a module, choose M here: the module
	  will be called 6pack.

config BPQETHER
	tristate "BPQ Ethernet driver"
	depends on AX25
	help
	  AX.25 is the protocol used for computer communication over amateur
	  radio. If you say Y here, you will be able to send and receive AX.25
	  traffic over Ethernet (also called "BPQ AX.25"), which could be
	  useful if some other computer on your local network has a direct
	  amateur radio connection.

config SCC
	tristate "Z8530 SCC driver"
	depends on ISA && AX25
	help
	  These cards are used to connect your Linux box to an amateur radio
	  in order to communicate with other computers. If you want to use
	  this, read
	  <file:Documentation/networking/device_drivers/hamradio/z8530drv.rst>
	  and the AX25-HOWTO, available from
	  <http://www.tldp.org/docs.html#howto>. Also make sure to say Y
	  to "Amateur Radio AX.25 Level 2" support.

	  To compile this driver as a module, choose M here: the module
	  will be called scc.

config SCC_DELAY
	bool "additional delay for PA0HZP OptoSCC compatible boards"
	depends on SCC
	help
	  Say Y here if you experience problems with the SCC driver not
	  working properly; please read
	  <file:Documentation/networking/device_drivers/hamradio/z8530drv.rst>
	  for details.

	  If unsure, say N.

config SCC_TRXECHO
	bool "support for TRX that feedback the tx signal to rx"
	depends on SCC
	help
	  Some transmitters feed the transmitted signal back to the receive
	  line.  Say Y here to foil this by explicitly disabling the receiver
	  during data transmission.

	  If in doubt, say Y.

config BAYCOM_SER_FDX
	tristate "BAYCOM ser12 fullduplex driver for AX.25"
	depends on AX25 && HAS_IOPORT
	select CRC_CCITT
	help
	  This is one of two drivers for Baycom style simple amateur radio
	  modems that connect to a serial interface. The driver supports the
	  ser12 design in full-duplex mode. In addition, it allows the
	  baudrate to be set between 300 and 4800 baud (however not all modems
	  support all baudrates). This is the preferred driver. The next
	  driver, "BAYCOM ser12 half-duplex driver for AX.25" is the old
	  driver and still provided in case this driver does not work with
	  your serial interface chip. To configure the driver, use the sethdlc
	  utility available in the standard ax25 utilities package.
	  For more information on the modems, see
	  <file:Documentation/networking/device_drivers/hamradio/baycom.rst>.

	  To compile this driver as a module, choose M here: the module
	  will be called baycom_ser_fdx.  This is recommended.

config BAYCOM_SER_HDX
	tristate "BAYCOM ser12 halfduplex driver for AX.25"
	depends on AX25 && HAS_IOPORT
	select CRC_CCITT
	help
	  This is one of two drivers for Baycom style simple amateur radio
	  modems that connect to a serial interface. The driver supports the
	  ser12 design in half-duplex mode. This is the old driver.  It is
	  still provided in case your serial interface chip does not work with
	  the full-duplex driver. This driver is deprecated.  To configure
	  the driver, use the sethdlc utility available in the standard ax25
	  utilities package. For more information on the modems, see
	  <file:Documentation/networking/device_drivers/hamradio/baycom.rst>.

	  To compile this driver as a module, choose M here: the module
	  will be called baycom_ser_hdx.  This is recommended.

config BAYCOM_PAR
	tristate "BAYCOM picpar and par96 driver for AX.25"
	depends on PARPORT && AX25
	select CRC_CCITT
	help
	  This is a driver for Baycom style simple amateur radio modems that
	  connect to a parallel interface. The driver supports the picpar and
	  par96 designs. To configure the driver, use the sethdlc utility
	  available in the standard ax25 utilities package.
	  For more information on the modems, see
	  <file:Documentation/networking/device_drivers/hamradio/baycom.rst>.

	  To compile this driver as a module, choose M here: the module
	  will be called baycom_par.  This is recommended.

config BAYCOM_EPP
	tristate "BAYCOM epp driver for AX.25"
	depends on PARPORT && AX25 && !64BIT
	select CRC_CCITT
	help
	  This is a driver for Baycom style simple amateur radio modems that
	  connect to a parallel interface. The driver supports the EPP
	  designs. To configure the driver, use the sethdlc utility available
	  in the standard ax25 utilities package.
	  For more information on the modems, see
	  <file:Documentation/networking/device_drivers/hamradio/baycom.rst>.

	  To compile this driver as a module, choose M here: the module
	  will be called baycom_epp.  This is recommended.

config YAM
	tristate "YAM driver for AX.25"
	depends on AX25 && HAS_IOPORT
	help
	  The YAM is a modem for packet radio which connects to the serial
	  port and includes some of the functions of a Terminal Node
	  Controller. If you have one of those, say Y here.

	  To compile this driver as a module, choose M here: the module
	  will be called yam.

 

```
