---
sidebar_position: 4
---
# Kconfig

### ファイル情報

- パス: `net/dns_resolver/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Configuration for DNS Resolver
#
config DNS_RESOLVER
	tristate "DNS Resolver support"
	depends on KEYS
	help
	  Saying Y here will include support for the DNS Resolver key type
	  which can be used to make upcalls to perform DNS lookups in
	  userspace.

	  DNS Resolver is used to query DNS server for information.  Examples
	  being resolving a UNC hostname element to an IP address for CIFS or
	  performing a DNS query for AFSDB records so that AFS can locate a
	  cell's volume location database servers.

	  DNS Resolver is used by the CIFS and AFS modules, and would support
	  SMB2 later.  DNS Resolver is supported by the userspace upcall
	  helper "/sbin/dns.resolver" via /etc/request-key.conf.

	  See <file:Documentation/networking/dns_resolver.rst> for further
	  information.

	  To compile this as a module, choose M here: the module will be called
	  dns_resolver.

	  If unsure, say N.

```
