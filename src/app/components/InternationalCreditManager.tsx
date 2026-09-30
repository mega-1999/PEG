import React from "react";
import { CreditCard, Globe, PhoneCall, Zap, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function InternationalCreditManager() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6 bg-slate-50">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-200 pb-6">
        <div>
          <h2 className="text-lg font-bold text-[#004aad]">Global Communication Credits</h2>
          <p className="text-[#1B79EE] text-sm font-medium uppercase tracking-tight">Mega Foundries US | Project ID: 2026-MF</p>
        </div>
        <Badge variant="outline" className="bg-[#1B79EE]/10 text-[#1B79EE] border-[#1B79EE] px-4 py-1 text-sm font-bold">
          Active Plan: Regular + Int'l
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Quick Top-Up Card */}
        <Card className="border-2 border-[#004aad] shadow-[4px_4px_0px_rgba(0,74,173,0.1)] rounded-none">
          <CardHeader className="bg-[#004aad] text-white">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Zap className="w-5 h-5 fill-white" /> Quick Top-Up
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-[#1B79EE]">Recharge Amount (INR)</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-[#1B79EE] font-bold">₹</span>
                <Input defaultValue="30" className="pl-8 border-slate-200 focus-visible:ring-[#1B79EE]" />
              </div>
            </div>
            <Button className="w-full bg-[#1B79EE] hover:bg-[#004aad] text-white font-bold rounded-none uppercase tracking-widest">
              Add GIO Credit
            </Button>
          </CardContent>
        </Card>

        {/* International Package Card */}
        <Card className="border border-slate-200 rounded-none hover:border-[#1B79EE] transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#004aad] text-lg">
              <Globe className="w-5 h-5" /> Int'l Calling
            </CardTitle>
            <CardDescription>Direct Project Outreach</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-slate-100 border-l-4 border-[#1B79EE]">
              <p className="text-xs font-bold text-[#1B79EE]">60 Minutes Pack</p>
              <p className="text-[10px] text-[#1B79EE] uppercase">Valid for 30 Days</p>
            </div>
            <Button variant="outline" className="w-full border-[#004aad] text-[#004aad] hover:bg-slate-50 font-bold rounded-none uppercase">
              Activate One HR
            </Button>
          </CardContent>
        </Card>

        {/* Current Balance / Stats */}
        <Card className="border border-slate-200 rounded-none bg-[#004aad] text-white">
          <CardContent className="pt-8 flex flex-col items-center text-center">
            <PhoneCall className="w-10 h-10 mb-4 opacity-50 text-[#1B79EE]" />
            <span className="text-[10px] font-black uppercase tracking-widest opacity-70">Remaining Minutes</span>
            <h3 className="text-2xl font-black mt-1">42:15</h3>
            <p className="text-[10px] mt-4 font-medium opacity-60">Status: Connection Stable</p>
          </CardContent>
        </Card>

      </div>

      {/* Recent Activity Ledger */}
      <div className="bg-white border border-slate-200 p-6 rounded-none">
        <div className="flex items-center gap-2 mb-4 text-[#004aad] font-bold">
          <History className="w-4 h-4" />
          <span className="uppercase text-xs tracking-widest">Transaction History</span>
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-y border-slate-100">
            <tr>
              <th className="py-3 px-4 text-[10px] font-black text-[#1B79EE] uppercase">Date</th>
              <th className="py-3 px-4 text-[10px] font-black text-[#1B79EE] uppercase">Description</th>
              <th className="py-3 px-4 text-[10px] font-black text-[#1B79EE] uppercase">Amount</th>
              <th className="py-3 px-4 text-[10px] font-black text-[#1B79EE] uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="text-xs">
              <td className="py-4 px-4 font-bold text-[#1B79EE] italic">May 01, 2026</td>
              <td className="py-4 px-4 text-[#1B79EE]">Regular GIO Add-on (Ben MF US)</td>
              <td className="py-4 px-4 font-bold text-[#004aad]">₹30.00</td>
              <td className="py-4 px-4"><Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none rounded-none text-[9px]">COMPLETED</Badge></td>
            </tr>
            <tr className="text-xs">
              <td className="py-4 px-4 font-bold text-[#1B79EE] italic">Apr 28, 2026</td>
              <td className="py-4 px-4 text-[#1B79EE]">International One HR Pack</td>
              <td className="py-4 px-4 font-bold text-[#004aad]">₹---</td>
              <td className="py-4 px-4"><Badge className="bg-slate-100 text-[#1B79EE] hover:bg-slate-100 border-none rounded-none text-[9px]">PENDING</Badge></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}