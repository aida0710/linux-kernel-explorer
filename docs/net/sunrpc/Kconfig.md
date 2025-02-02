---
sidebar_position: 12
---
# Kconfig

### ファイル情報

- パス: `net/sunrpc/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config SUNRPC
	tristate
	depends on MULTIUSER

config SUNRPC_GSS
	tristate
	select OID_REGISTRY
	depends on MULTIUSER

config SUNRPC_BACKCHANNEL
	bool
	depends on SUNRPC

config SUNRPC_SWAP
	bool
	depends on SUNRPC

config RPCSEC_GSS_KRB5
	tristate "Secure RPC: Kerberos V mechanism"
	depends on SUNRPC && CRYPTO
	default y
	select SUNRPC_GSS
	select CRYPTO_SKCIPHER
	select CRYPTO_HASH
	help
	  Choose Y here to enable Secure RPC using the Kerberos version 5
	  GSS-API mechanism (RFC 1964).

	  Secure RPC calls with Kerberos require an auxiliary user-space
	  daemon which may be found in the Linux nfs-utils package
	  available from http://linux-nfs.org/.  In addition, user-space
	  Kerberos support should be installed.

	  If unsure, say Y.

config RPCSEC_GSS_KRB5_ENCTYPES_AES_SHA1
	bool "Enable Kerberos enctypes based on AES and SHA-1"
	depends on RPCSEC_GSS_KRB5
	depends on CRYPTO_CBC && CRYPTO_CTS
	depends on CRYPTO_HMAC && CRYPTO_SHA1
	depends on CRYPTO_AES
	default y
	help
	  Choose Y to enable the use of Kerberos 5 encryption types
	  that utilize Advanced Encryption Standard (AES) ciphers and
	  SHA-1 digests. These include aes128-cts-hmac-sha1-96 and
	  aes256-cts-hmac-sha1-96.

config RPCSEC_GSS_KRB5_ENCTYPES_CAMELLIA
	bool "Enable Kerberos encryption types based on Camellia and CMAC"
	depends on RPCSEC_GSS_KRB5
	depends on CRYPTO_CBC && CRYPTO_CTS && CRYPTO_CAMELLIA
	depends on CRYPTO_CMAC
	default n
	help
	  Choose Y to enable the use of Kerberos 5 encryption types
	  that utilize Camellia ciphers (RFC 3713) and CMAC digests
	  (NIST Special Publication 800-38B). These include
	  camellia128-cts-cmac and camellia256-cts-cmac.

config RPCSEC_GSS_KRB5_ENCTYPES_AES_SHA2
	bool "Enable Kerberos enctypes based on AES and SHA-2"
	depends on RPCSEC_GSS_KRB5
	depends on CRYPTO_CBC && CRYPTO_CTS
	depends on CRYPTO_HMAC && CRYPTO_SHA256 && CRYPTO_SHA512
	depends on CRYPTO_AES
	default n
	help
	  Choose Y to enable the use of Kerberos 5 encryption types
	  that utilize Advanced Encryption Standard (AES) ciphers and
	  SHA-2 digests. These include aes128-cts-hmac-sha256-128 and
	  aes256-cts-hmac-sha384-192.

config RPCSEC_GSS_KRB5_KUNIT_TEST
	tristate "KUnit tests for RPCSEC GSS Kerberos" if !KUNIT_ALL_TESTS
	depends on RPCSEC_GSS_KRB5 && KUNIT
	default KUNIT_ALL_TESTS
	help
	  This builds the KUnit tests for RPCSEC GSS Kerberos 5.

	  KUnit tests run during boot and output the results to the debug
	  log in TAP format (https://testanything.org/). Only useful for
	  kernel devs running KUnit test harness and are not for inclusion
	  into a production build.

	  For more information on KUnit and unit tests in general, refer
	  to the KUnit documentation in Documentation/dev-tools/kunit/.

config SUNRPC_DEBUG
	bool "RPC: Enable dprintk debugging"
	depends on SUNRPC && SYSCTL
	select DEBUG_FS
	help
	  This option enables a sysctl-based debugging interface
	  that is be used by the 'rpcdebug' utility to turn on or off
	  logging of different aspects of the kernel RPC activity.

	  Disabling this option will make your kernel slightly smaller,
	  but makes troubleshooting NFS issues significantly harder.

	  If unsure, say Y.

config SUNRPC_XPRT_RDMA
	tristate "RPC-over-RDMA transport"
	depends on SUNRPC && INFINIBAND && INFINIBAND_ADDR_TRANS
	default SUNRPC && INFINIBAND
	select SG_POOL
	help
	  This option allows the NFS client and server to use RDMA
	  transports (InfiniBand, iWARP, or RoCE).

	  To compile this support as a module, choose M. The module
	  will be called rpcrdma.ko.

	  If unsure, or you know there is no RDMA capability on your
	  hardware platform, say N.

```
