---
sidebar_position: 1
---
# exception_policy.conf.default

### ファイル情報

- パス: `linux-v6.12/security/tomoyo/policy/exception_policy.conf.default`

### コンテンツ

```default
initialize_domain /sbin/modprobe from any
initialize_domain /sbin/hotplug from any

```
