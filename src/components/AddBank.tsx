import { RxPlusCircled } from "react-icons/rx";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export default function AddBank() {
    return (
        <section className="w-full">
            <div className="flex flex-row items-center pt-5">
                <Dialog>
                    <DialogTrigger>
                        <Button asChild variant={"ghost"}>
                            <div className="flex gap-8">
                                <RxPlusCircled className="w-5 h-5" />  
                                <p className="font-semibold text-[16px]">Add Bank</p>
                            </div>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[500px]">
                        <DialogHeader>
                            <DialogTitle>Add Bank</DialogTitle>
                            <DialogDescription>
                                Please add your bank to manage your financial
                            </DialogDescription>
                        </DialogHeader>
                            <div className="flex flex-col gap-3 items-start py-3">
                                <Label htmlFor="addbank" >Add Bank</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select your bank" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="Mandiri">Mandiri</SelectItem>
                                            <SelectItem value="BCA">BCA</SelectItem>
                                            <SelectItem value="BNI">BNI</SelectItem>
                                            <SelectItem value="PANIN">PANIN</SelectItem>
                                            <SelectItem value="BRI">BRI</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    )
}