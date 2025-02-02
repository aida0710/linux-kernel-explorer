---
sidebar_position: 6
---
# Kconfig

### ファイル情報

- パス: `net/can/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Controller Area Network (CAN) network layer core configuration
#

menuconfig CAN
	tristate "CAN bus subsystem support"
	help
	  Controller Area Network (CAN) is a slow (up to 1Mbit/s) serial
	  communications protocol. Development of the CAN bus started in
	  1983 at Robert Bosch GmbH, and the protocol was officially
	  released in 1986. The CAN bus was originally mainly for automotive,
	  but is now widely used in marine (NMEA2000), industrial, and medical
	  applications. More information on the CAN network protocol family
	  PF_CAN is contained in <Documentation/networking/can.rst>.

	  If you want CAN support you should say Y here and also to the
	  specific driver for your controller(s) under the Network device
	  support section.

if CAN

config CAN_RAW
	tristate "Raw CAN Protocol (raw access with CAN-ID filtering)"
	default y
	help
	  The raw CAN protocol option offers access to the CAN bus via
	  the BSD socket API. You probably want to use the raw socket in
	  most cases where no higher level protocol is being used. The raw
	  socket has several filter options e.g. ID masking / error frames.
	  To receive/send raw CAN messages, use AF_CAN with protocol CAN_RAW.

config CAN_BCM
	tristate "Broadcast Manager CAN Protocol (with content filtering)"
	default y
	help
	  The Broadcast Manager offers content filtering, timeout monitoring,
	  sending of RTR frames, and cyclic CAN messages without permanent user
	  interaction. The BCM can be 'programmed' via the BSD socket API and
	  informs you on demand e.g. only on content updates / timeouts.
	  You probably want to use the bcm socket in most cases where cyclic
	  CAN messages are used on the bus (e.g. in automotive environments).
	  To use the Broadcast Manager, use AF_CAN with protocol CAN_BCM.

config CAN_GW
	tristate "CAN Gateway/Router (with netlink configuration)"
	default y
	help
	  The CAN Gateway/Router is used to route (and modify) CAN frames.
	  It is based on the PF_CAN core infrastructure for msg filtering and
	  msg sending and can optionally modify routed CAN frames on the fly.
	  CAN frames can be routed between CAN network interfaces (one hop).
	  They can be modified with AND/OR/XOR/SET operations as configured
	  by the netlink configuration interface known e.g. from iptables.

source "net/can/j1939/Kconfig"

config CAN_ISOTP
	tristate "ISO 15765-2 CAN transport protocol"
	help
	  CAN Transport Protocols offer support for segmented Point-to-Point
	  communication between CAN nodes via two defined CAN Identifiers.
	  This protocol driver implements segmented data transfers for CAN CC
	  (aka Classical CAN, CAN 2.0B) and CAN FD frame types which were
	  introduced with ISO 15765-2:2016.
	  As CAN frames can only transport a small amount of data bytes
	  (max. 8 bytes for CAN CC and max. 64 bytes for CAN FD) this
	  segmentation is needed to transport longer Protocol Data Units (PDU)
	  as needed e.g. for vehicle diagnosis (UDS, ISO 14229) or IP-over-CAN
	  traffic.

endif

```
