---
sidebar_position: 7
---
# cpupower-powercap-info.1

### ファイル情報

- パス: `linux-v6.12/tools/power/cpupower/man/cpupower-powercap-info.1`

### コンテンツ

```1
.TH CPUPOWER\-POWERCAP\-INFO "1" "05/08/2016" "" "cpupower Manual"
.SH NAME
cpupower\-powercap\-info \- Shows powercapping related kernel and hardware configurations
.SH SYNOPSIS
.ft B
.B cpupower powercap-info

.SH DESCRIPTION
\fBcpupower powercap-info \fP shows kernel powercapping subsystem information.
This needs hardware support and a loaded powercapping driver (at this time only
intel_rapl driver exits) exporting hardware values userspace via sysfs.

Some options are platform wide, some affect single cores. By default values
of core zero are displayed only. cpupower --cpu all cpuinfo will show the
settings of all cores, see cpupower(1) how to choose specific cores.

.SH "DOCUMENTATION"

kernel sources:
Documentation/power/powercap/powercap.rst


.SH "SEE ALSO"

cpupower(1)

```
